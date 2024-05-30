[Office Lunch Menu Management Frontend](https://office-lunch-menu-management-frontend.vercel.app/) (Frontend Live Site Link)
[Office Lunch Menu Management Backend](https://office-lunch-menu-management-sage.vercel.app/) (Backend Live Site Link)

## Office Lunch Menu Management

The Office Lunch Menu Management System is a web application designed to streamline the process of managing daily lunch options in an office environment. Admins can easily add and manage daily lunch menus, while employees can view these menus and select their lunch preferences. This system aims to simplify the lunch ordering process and ensure that all employees' choices are recorded efficiently.

- The packages that is used in this project:
- Backend:
  -- pg to connect postgres database
  -- cors to avoid cors issue
  -- jsonwebtoken for generating jwt token
  -- dotenv to load data from .env
- Frontend:
  -- antd and taiwindCSS for UI Design
  -- react-router-dom for routing
  -- axios for data fetching

- The website is still under development.

### To run the backend application locally: clone this repository,run the command:

```
npm install
```

Then run the command

```
npm run start:dev
```

The backend application will start at port 5000. To run the routes locally just replace the live link with : http://localhost:5000/

### To run the frontend application locally: clone this repository,run the command:

` cd ./lunch-menu-management-frontend`
and then:

```
npm install
```

Then run the command

```
npm run dev
```

The backend application will start at port 5173. To run the routes locally just replace the live link with : http://localhost:5173/

### Backend Application Routes:

#### Users

- Route: https://office-lunch-menu-management-sage.vercel.app/api/v1/users/register (POST)

```sample json:
{
    "email": "abc@gmail.com",
    "password": "employee",
    "department": "Administration",
    "designation": "Executive"
}
```

- Route: https://office-lunch-menu-management-sage.vercel.app/api/v1/users/login (POST)

```sample json:
{
    "email": "jeba@gmail.com",
    "password": "123456"
}
```

#### Menu

- Route: https://office-lunch-menu-management-sage.vercel.app/api/v1/lunch-options/create-menu (POST)

```sample json:
{
    "options": [
    {
        "date": "2024-05-30",
        "option_name": "menu-1",
        "description": "Burger, Coke"
    },
    {
        "date": "2024-05-30",
        "option_name": "Menu-2",
        "description": "Chinese Fried Rice, Fried chicken, vegetable"
    }

]
}
```

- Route: https://office-lunch-menu-management-sage.vercel.app/api/v1/lunch-options (GET )
- Route: https://office-lunch-menu-management-sage.vercel.app/api/v1/lunch-options/2 (Single GET)
- Route: https://office-lunch-menu-management-sage.vercel.app/api/v1/lunch-options/1 (PUT)

```sample json:
{
    "option_name" : "menu-33",
    "description": "description"
}
```

- Route: https://office-lunch-menu-management-sage.vercel.app/api/v1/lunch-options/1 (DELETE)

### Employee Choices

- Route: https://office-lunch-menu-management-sage.vercel.app/api/v1/employee-choices(POST)

```sample json:
{
    "lunchoptionid": 1
}
```

- Route: https://office-lunch-menu-management-sage.vercel.app/api/v1/employee-choices (GET)
- Route: https://office-lunch-menu-management-sage.vercel.app/api/orders?lunchoptionid=3&date=2023-06-30 (GET filtered data)
- Route: https://office-lunch-menu-management-sage.vercel.app/api/v1/employee-choices/3 (GET Single data)
