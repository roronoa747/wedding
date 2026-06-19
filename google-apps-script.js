// ================================================
// Google Apps Script для свадебных RSVP
// Ильяс & Аруна — 11 тамыз 2026
//
// КАК УСТАНОВИТЬ:
// 1. Открой Google Таблицу → Расширения → Apps Script
// 2. Удали всё и вставь этот код
// 3. Нажми "Сохранить"
// 4. Нажми "Развернуть" → "Новое развертывание"
// 5. Тип: Веб-приложение
//    "Кто запускает" → "Я"
//    "Кто имеет доступ" → "Все"
// 6. Нажми "Развернуть" → скопируй URL
// 7. Вставь URL в index.html вместо Formspree
// ================================================

// Твой email для уведомлений
var NOTIFY_EMAIL = "ilyas.muratbek.99@gmail.com";

// Название листа в таблице
var SHEET_NAME = "RSVP";

function doPost(e) {
  try {
    var sheet = getOrCreateSheet();
    var data  = e.parameter;

    // Время получения
    var timestamp = new Date().toLocaleString("ru-RU", {
      timeZone: "Europe/Moscow",
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit"
    });

    // Записываем строку
    sheet.appendRow([
      timestamp,
      data.name        || "",
      data.attendance  || "",
      data.guests      || "1",
      data.message     || "",
      data.lang        || "kz"
    ]);

    // Отправляем email-уведомление
    sendNotification(data, timestamp);

    // Ответ сайту
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// При GET-запросе тоже отвечаем OK (для проверки)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: "RSVP endpoint active" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Заголовки
    sheet.appendRow(["Дата", "Имя гостя", "Придёт?", "Кол-во человек", "Пожелания", "Язык"]);
    // Стилизация заголовков
    var header = sheet.getRange(1, 1, 1, 6);
    header.setBackground("#C6A96D");
    header.setFontColor("#FFFFFF");
    header.setFontWeight("bold");
    header.setFontSize(11);
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 140); // Дата
    sheet.setColumnWidth(2, 180); // Имя
    sheet.setColumnWidth(3, 220); // Придёт
    sheet.setColumnWidth(4, 120); // Кол-во
    sheet.setColumnWidth(5, 300); // Пожелания
    sheet.setColumnWidth(6, 70);  // Язык
  }

  return sheet;
}

function sendNotification(data, timestamp) {
  try {
    var isYes    = data.attendance && data.attendance !== "Unfortunately, I cannot attend"
                   && data.attendance !== "Не смогу"
                   && data.attendance !== "Өкінішке орай, келе алмаймын";
    var emoji    = isYes ? "✅" : "❌";
    var subject  = emoji + " RSVP: " + (data.name || "Гость") + " — Той Ильяс & Аруна";

    var body = [
      "Новый ответ на приглашение:",
      "",
      "👤 Имя: " + (data.name || "—"),
      "📩 Ответ: " + (data.attendance || "—"),
      "👥 Гостей: " + (data.guests || "1"),
      "💬 Пожелание: " + (data.message || "—"),
      "🕐 Время: " + timestamp,
      "🌐 Язык: " + (data.lang || "—"),
    ].join("\n");

    MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
  } catch (err) {
    // Email не критичен — продолжаем
    console.log("Email error:", err);
  }
}
