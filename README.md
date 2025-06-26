# 📝 ToDo App

Це проста, але функціональна ToDo апка, створена на React + TypeScript. Ви можете додавати, редагувати, фільтрувати та видаляти завдання. Дані отримуються з API для демонстрації CRUD операцій.

---

## ⚙️ Стек технологій

- ⚛️ **React** + **TypeScript**
- 🧱 **SCSS Modules**
- 🚀 **Vite** для білду
- 🎨 **Bulma** (частково)
- 🔁 **React Transition Group** для анімацій
- 🧪 **Cypress** (налаштовано)

---

## 📁 Структура проєкту

src/
├── api/ # API-запити (getTodos, addTodo, etc)
├── components/ # Усі реюзабельні компоненти (Header, Footer, TodoItem...)
├── styles/ # SCSS стилі
├── types/ # TypeScript типи (Todo)
├── utils/ # Хелпери та enums (FilterStatus, errorMessages)
├── App.tsx # Головна логіка ToDo
├── main.tsx # Точка входу

---

## 🚀 Як запустити

### 1. Клонувати репозиторій

git clone https://github.com/vladrlex/todo-app.git
cd todo-app

### 2. Встановити залежності
npm install

### 3. Запустити додаток
npm start



### 🔧 Основні можливості
✅ Створення нового ToDo

✏️ Редагування існуючого

🗑️ Видалення завдання або всіх виконаних

✅ Мітка "виконано"

🔄 Масове оновлення статусів

🔍 Фільтрація: All / Active / Completed

⚠️ Обробка помилок (мережа, валідація)

⏳ Індикатори завантаження


