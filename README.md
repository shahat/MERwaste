# RemWaste Project

## Overview
RemWaste is a React-based web application designed to allow users to select skip sizes for waste management. The project utilizes React Context API for state management and a custom hook for fetching data from an API.

## Features
- **Skip Size Selection**: Users can choose a skip size from a list of available options.
- **Context API for State Management**: Global state handling using `SkipContext`.
- **Custom Hook (`useSkips`)**: Handles data fetching and state management for skip sizes.
- **Reusable Components**: Includes `SkipCard`, `StepsBar`, and buttons.
- **API Integration**: Fetches skip sizes dynamically using `skipService.ts`.

## Project Structure
```
src/
|-- components/
|   |-- reusableComponents/
|   |-- skipCard/
|   |-- stepsBar/
|-- context/
|   |-- SkipContext.tsx
|-- hooks/
|   |-- useSkips.ts
|-- pages/
|   |-- gardenSkipsPage/
|-- services/
|   |-- skipService.ts
|-- types/
|   |-- skipTypes.ts
```

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/remwaste.git
   cd remwaste
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Key Technologies Used
- **React & TypeScript**
- **Context API** for state management
- **Custom Hooks** for fetching data
- **Tailwind CSS** for styling
- **Axios** for API calls

## Usage of Context API (`SkipContext`)
The `SkipContext` provides the global state for skip sizes. It wraps the components where the skip selection is needed.
```tsx
const skipContext = useContext(SkipContext);
if (!skipContext) {
    throw new Error("SkipList must be used within a SkipProvider");
}
const { skips, selectedCardId, selectCard } = skipContext;
```

## Custom Hook (`useSkips`)
The `useSkips` hook is responsible for fetching skip sizes and handling errors.
```tsx
const { skips, loading, error } = useSkips(fetchSkips, []);
```
It fetches data from `skipService.ts`, which makes an API request to retrieve the skip sizes.

## Contributing
Feel free to fork and contribute by submitting pull requests.

## License
This project is licensed under the MIT License.

---
🚀 Happy coding!

