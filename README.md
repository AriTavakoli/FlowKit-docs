This document provides instructions on how to set up and run the project. Please follow the steps below in order to ensure a smooth execution.

## **Step 1: Set up the Environment Variables**

1. Create a new file named **`.env`** in the project's root directory.
2. Open the **`.env.example`** file and copy its contents.
3. Paste the copied contents into the newly created **`.env`** file.
4. Edit the **`.env`** file and set the following values:
    - NODE_ENV="development"
    - TS_TRANSPILE_ONLY="true"

## **Step 2: Install Dependencies**

1. Navigate to the FlowKit directory using the command line interface.
2. Run the command **`npm install`** to install the project's dependencies.

## **Step 3: Build the Project**

1. To build the worker, run the command **`npm run build:worker`**.
2. To build the project for production, run the command **`npm run build:prod`**.
3. Load your extension on Chrome following:
    1. Access `chrome://extensions/`
    2. Check `Developer mode`
    3. Click on `Load unpacked extension`
    4. Select the `build` folder.