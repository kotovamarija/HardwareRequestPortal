# HardwareRequestPortal  

**Application for submitting and managing hardware requests.**  

The **HardwareRequestPortal** is a web application that allows users to browse available equipment, request hardware, and track the status of their requests. The portal also provides an admin interface to manage requests, approve, reject, or delete them.  

![Image](https://private-user-images.githubusercontent.com/194954597/410307567-a266fe27-2651-4826-8031-9bb94c6ab801.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg4MjIzMTksIm5iZiI6MTczODgyMjAxOSwicGF0aCI6Ii8xOTQ5NTQ1OTcvNDEwMzA3NTY3LWEyNjZmZTI3LTI2NTEtNDgyNi04MDMxLTliYjk0YzZhYjgwMS5QTkc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIwNlQwNjA2NTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hNDAzOTNiZDMxNGMyMjg1N2M5MDIwMjJlZDFiYmFiMDUxMzQ3NDEwMGQwNmZlNGM0ZWU3ZTA4MWIwNThmY2YyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.DjRdBFiKc1XTUxFvD1aOv20PkZMgoRwlRyNCM54Fg_8)


## Architecture  

The application consists of two parts:  

### Backend (Spring Boot Application)  
- Java 17  
- Spring Boot 3.4.2  
- SQLite database (embedded)  
- Maven for dependency management  

### Frontend (Angular Application)  
- Angular 19  
- Single Page Application (SPA)  

## Functionality  

### Hardware Selection:  
- Users can browse hardware by categories, types, and parameters.  
- Users must provide a reason for requesting specific hardware.  
- Search functionality is available to filter hardware by parameters.  

### Request Management:  
- The system records the exact time of each request.  
- Admins can view a full list of requests and approve, reject, or delete them.  

### User Access Control:  
- Unauthenticated users can browse available hardware.  
- Only authenticated users can submit requests.  
- Admins have full access to manage requests and view all submissions.  

## Application Workflow (Scheme)  
The following diagram provides a visual representation of how the application functions

![Image](https://private-user-images.githubusercontent.com/194954597/410312396-39bde7a4-0a73-4920-bf9a-b444bb2d1cd6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg4MjE1ODEsIm5iZiI6MTczODgyMTI4MSwicGF0aCI6Ii8xOTQ5NTQ1OTcvNDEwMzEyMzk2LTM5YmRlN2E0LTBhNzMtNDkyMC1iZjlhLWI0NDRiYjJkMWNkNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIwNlQwNTU0NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lYTA5NmFhZjdmZWE2ZmU0M2JiNTY5YTFjMjdhOTIwY2M1ZTFkYzVlMTgxODFkMGQzMDhlNmVkMmNmYjMxNmJhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.8hHWOdBJ6VETI5VedWSQLpt0elw4ttCF5jj2m6jByOo)

## Prerequisites  

Before running the application on another machine, make sure you have the following installed:  

- **Node.js** (for Angular frontend)  
- **Maven** (for Spring Boot backend)  
- **JDK 17** (for Spring Boot backend)  

## Getting Started  

### 1. Clone the repository  

```
git clone https://github.com/kotovamarija/HardwareRequestPortal.git
cd HardwareRequestPortal
```

### 2. Running the Angular Frontend

#### Install dependencies:

Inside the frontend folder (HardwareRequestSPA), run:

```
npm install -g @angular/cli
```

#### Run the Angular application:

Now you can start the Angular application by running:

```
ng serve
```

By default, the app will be available at http://localhost:4200.

### 3. Running the Spring Boot Backend

#### Install dependencies and build the backend:

Inside the backend folder (HardwareRequestApp), run:

```
mvn clean install
```

#### Run the Spring Boot application:

After the build completes, you can start the backend by running:

```
mvn spring-boot:run
```

The backend will be available at http://localhost:8080.

### 4. Testing the Application

Once both the backend and frontend are running, open your browser and go to:

Frontend (Angular): http://localhost:4200

Backend (Spring Boot): http://localhost:8080

You can now interact with the application by browsing available equipment, making requests, and managing them based on your role (user or admin).

### Credentials for Testing

- **User role**:
  - Username: `user`
  - Password: `user2025`

- **Admin role**:
  - Username: `admin`
  - Password: `admin2025`


### Notes

- **Database**: SQLite is used for the database, and it's embedded in the Spring Boot project as a .db file.
- **Testing**: All testing for this application was done by manually going through the features and simulating various scenarios to make sure everything works as expected.
- **Authentication**: Only authenticated users can make requests, and only admins can manage request statuses.


## Contact

Feel free to reach out to me at:  
**Email**: [marija.kotova91@gmail.com](mailto:marija.bondarenko@inbox.lv)  
**LinkedIn**: [www.linkedin.com/in/marija-kotova](https://www.linkedin.com/in/marija-kotova)