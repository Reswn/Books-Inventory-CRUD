## Reni Kartika Suwandi

---

# 📚 Book Inventory App

A simple and elegant full-stack application for managing your personal or business book inventory. Built using **Next.js 14 App Router**, **Prisma ORM**, **Shadcn UI**, and **Tailwind CSS**. Supports authenticated users, real-time filtering, dynamic routing, and server actions.

---

## ✨ Features

- ✅ User Authentication (via Stackframe)
- 📁 Add / View / Filter books by name or category
- 🔍 Client-side filtering with search and category dropdown
- 🧠 Server-side database queries via Prisma
- 💅 Styled with Shadcn UI + Tailwind CSS
- 🔒 Private book ownership (only show user’s own books)
- 📦 Book details page with slug-based dynamic routing
- 🧱 Modular, typed components using TypeScript
- 🚀 Fully compatible with App Router + Server Components

---

## 🧱 Tech Stack

| Tech       | Usage                            |
|------------|----------------------------------|
| Next.js    | Full-stack React framework       |
| Prisma     | ORM to connect to PostgreSQL     |
| Shadcn UI  | UI components using Radix + Tailwind |
| Tailwind CSS | Utility-first CSS styling      |
| Stackframe | Auth and server actions          |
| PostgreSQL | Relational database              |
| TypeScript | Static typing                    |

---

## 📁 Folder Structure

```
/app
  /inventory       # Inventory table + book cards
  /book/[slug]     # Dynamic detail page for each book
/components         # Reusable UI components (Table, Card, etc)
/actions            # Server actions (getBooks, getBookById)
/lib
  prisma.ts         # Prisma client
  utils.ts          # (Optional) Helper functions
/prisma
  schema.prisma     # Prisma DB schema
/public             # Static assets
```

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/book-inventory-app.git  
cd book-inventory-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup your database

Update the `.env` file with your own PostgreSQL database URL:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/bookdb
```

### 4. Generate and push Prisma schema

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the app locally

```bash
npm run dev
```

App will be available at: http://localhost:3000

---

### 🧪 Example `.env` file

```ini
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/bookdb
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## 📌 Important Components

- `BookCard.tsx` – Reusable card to display book details
- `InventoryTable.tsx` – Table with filter input & category combobox
- `getBooks()` – Server action to fetch books (optionally filtered)
- `getBookById()` – Server action to get one book from slug
- `BookDetailsPage.tsx` – Full book detail layout using dynamic params

---

## 🔐 Authentication

Authentication is handled by Stackframe Auth, and all book data is scoped to the currently logged-in user via `userId`. Unauthorized users are redirected to the `<SignIn />` component.

---

## 📦 Example Book Model (Prisma)

```prisma
model Book {
  id        String   @id @default(cuid())
  name      String
  description String?
  category  String
  stock     Int
  price     Float
  imageUrl  String?
  userId    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## 🧼 TODO / Improvements

- [ ] Add Edit/Delete functionality
- [ ] Image uploader for book cover
- [ ] Pagination for large inventories
- [ ] Responsive design enhancements
- [ ] Role-based admin panel

---

## 📄 License

This project is licensed under the MIT License. Feel free to use and modify for personal or commercial projects.

---

## 👨‍💻 Author

Developed by Reni Kartika Suwandi

Built with ❤️ using Next.js, Prisma, and Shadcn UI

---
