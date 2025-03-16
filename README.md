# Movie Explorer

A React-based application built with Vite that allows users to explore and discover movies. It leverages the TMDB API to fetch movie data and provides a user-friendly interface for searching and filtering movies based on various criteria.

## Preview

[Live Demo](https://damsithcoder.github.io/movie-explorer/)

## Screenshot

![Movie Explorer Screenshot](src/assets/Screenshot (6).png)

## Features

-   **Search:** Allows users to search for movies by title.
-   **Filtering:** Provides options to filter movies by language, country, duration, and genre.
-   **Browse:** Displays movies in a grid layout with key information such as title, release date, and a link to view more details on TMDB.
-   **Sign Up:** Offers a sign-up modal for new users to the email list.
-   **Load More:** Implements pagination to load more movies as the user scrolls.

## Technologies Used

-   [React](https://reactjs.org/): A JavaScript library for building user interfaces.
-   [Vite](https://vitejs.dev/): A build tool that provides a fast and efficient development experience.
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Vite plugin for React projects using SWC for Fast Refresh.
-   [Material UI (MUI)](https://mui.com/): A popular React UI framework for building responsive and accessible web applications.
-   [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
-   [gh-pages](https://github.com/tschaub/gh-pages): For deploying the project to GitHub Pages.
-   [ESLint](https://eslint.org/): A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Setup

### Prerequisites

-   Node.js (>=18.0)
-   npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd movie-explorer
    ```

3.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4.  Create a [.env](http://_vscodecontentref_/0) file in the root directory and add your TMDB API key:

    ```
    VITE_TMDB_API_KEY=your_tmdb_api_key_here
    ```

    Replace `your_tmdb_api_key_here` with your actual TMDB API key. You can obtain an API key from [TMDB](https://www.themoviedb.org/).

### Development

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will start the application in development mode, usually on `http://localhost:5173`.

### Building for Production

1.  Build the application for production:

    ```bash
    npm run build
    # or
    yarn build
    ```

    This will create an optimized build of the application in the [dist](http://_vscodecontentref_/1) directory.

### Deployment to GitHub Pages

1.  Add `"homepage": "https://<your_github_username>.github.io/<your_repository_name>/"` to your [package.json](http://_vscodecontentref_/2) file.

2.  Deploy the application to GitHub Pages:

    ```bash
    npm run deploy
    # or
    yarn deploy
    ```

    This command will build the project and deploy it to the `gh-pages` branch of your GitHub repository.  Ensure that GitHub Pages is enabled for your repository.

## Project Structure
 ├── .env.example # Example environment variables ├── .gitignore # Specifies intentionally untracked files that Git should ignore ├── eslint.config.js # ESLint configuration file ├── index.html # Main HTML file ├── package.json # Project dependencies and scripts ├── public/ # Public assets directory ├── README.md # Project documentation ├── src/ # Source code directory │ ├── App.css # Main application styles │ ├── App.jsx # Main application component │ ├── assets/ # Static assets (images, etc.) │ ├── components/ # React components │ │ ├── MovieCard.jsx # Component for displaying movie information │ │ ├── SearchBar.jsx # Component for searching and filtering movies │ │ └── SignUpModal.jsx # Component for the sign-up modal │ ├── index.css # Global styles │ ├── main.jsx # Entry point for the React application │ └── styles/ # Styles for individual components │ ├── MovieCard.css # Styles for the MovieCard component │ ├── SearchBar.css # Styles for the SearchBar component │ └── SignUpModal.css # Styles for the SignUpModal component ├── vite.config.js # Vite configuration file
## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs, feature requests, or suggestions.

## License

MIT