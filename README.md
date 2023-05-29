# CRUD App using AWS Lambda Functions

This repository contains a CRUD (Create, Read, Update, Delete) application implemented using AWS Lambda functions. The application provides an API for managing users through the following operations: create, retrieve, update, and delete.

## Functionality

The application utilizes the following AWS services and components:

- AWS Lambda: Serverless compute service for running the application's functions.

The application supports the following operations:

- **Create**: Create a new user by sending a POST request to the API endpoint.
- **Read**: Retrieve information about a specific user by sending a GET request to the API endpoint.
- **Update**: Update an existing user by sending a PUT request to the API endpoint.
- **Delete**: Delete a specific user by sending a DELETE request to the API endpoint.

## Setup

To deploy and run the CRUD application, follow these steps:

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Install the required dependencies:

   ```shell
   cd <repository-directory>
   npm install
   ```

3. Configure AWS credentials:

   Ensure that you have your AWS credentials properly set up on your local machine. You can use the AWS CLI or manually configure the credentials file (`~/.aws/credentials`).

4. Configure AWS region:

   Open `serverless.yml` and modify the `provider.region` field to specify your desired AWS region.

5. Deploy the application:

   ```shell
   serverless deploy
   ```

   This command will package and deploy the application to AWS Lambda.

6. Access the API:

   Once the deployment is successful, the Serverless framework will provide you with the API endpoint URL. You can use this URL to interact with the CRUD operations.

## Usage

To use the CRUD application, you can send HTTP requests to the API endpoint using your preferred tool, such as cURL or Postman. Here is an example of the available API endpoints:

- ## Base url = 
https://3000-haritaegis-assignment-jhf2zsiob7t.ws-us97.gitpod.io

- `POST /insert-user`: Create a new user.
- `GET /get-user?id`: Retrieve a specific user.
- `PUT /update-user?id`: Update a specific user.
- `DELETE /delete-user?id`: Delete a specific user.

## License

This CRUD application is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

## Acknowledgements

The implementation of this CRUD application was inspired by various AWS Lambda tutorials and documentation available online. Special thanks to the open-source community and contributors who have provided valuable users and guidance.
