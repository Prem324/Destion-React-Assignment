# E-Commerce Portal: Invoice and Product Management

An application that allows store owners to manage invoices and product information for their respective stores. This includes generating invoices, managing product details, and implementing filtering and searching functionalities.

> Demo
>
> Vercel Link: https://prems-destion-react-assignment.vercel.app/

### Usage

```
git clone <github repository link>  //to clone the github repository
npm install                         //to install all the dependencies required to run application
npm start                           //to start the application
```

**Note:** Node should be greater than or equal to **14.0** to run the Application.

## Development

### Tech Stack

Frontend - ReactJS (React Router)

### Technical Details

### Routes

| Page            | Route           | Path                      |
| --------------- | --------------- | ------------------------- |
| Login           | Login           | /login                    |
| Home            | Home            | /                         |
| Invoice List    | Invoice List    | /invoices                 |
| Invoice Details | Invoice Details | /invoices/:id             |
| Product List    | Product List    | /products                 |
| Product Details | Product Details | /products/:id             |
| Product Form    | Product Form    | /products/new             |
| Poriduct Form   | Product Form    | /products/:productId/edit |

### Guidelines

- Followed Github Guidelines
  - Made the commits often and made sure the commit messages are concise and specific
  - Included a README file for explaining the project setup, usage instructions, and any additional information.
- Followed Clean Code Guidelines
- The repo is well-organized and easy to navigate
  - Followed the `create vite@latest` folder structure
- The Application handled all the errors

### Resources

#### API

- Using Mock Data

#### Third-party packages

- React Router (react-router-dom v5.2.0)
- Icons (react-icons)
- jsPDF (jspdf)
- Popup Status (react-toatify)
