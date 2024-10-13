## How to run the project locally

Firstly, you will need to clone the project into your desired folder using 

```bash
git clone https://github.com/BigDataForSanDiego/Team-207.git
```
To run this project locally, you will need two terminals open for the frontend and backend respectively. 

### Frontend

To run the frontend, you will need to have NodeJS installed on your computer. If you have NodeJS, we can begin by changing directories into the frontend folder using

```bash
cd frontend
```

Now we need to install the dependencies for the frontend before running the frontend on development mode using

```bash
npm i
npm run dev
```

### Backend

To run the backend, you will need to have python installed on your computer. If you have python installed, we can begin by changing directories into the backend folder using

```bash
cd backend
```

Now we need to make the virtual environment in which we can run the backend server using

```bash
python -m venv venv
```

We can now activate the environment using
 - On Mac/Linux:

```bash
source venv/bin/activate
```

 - On Windows:

```bash
venv\Scripts\activate
```

Now we need to install our backend dependencies before running our backend server using

```
pip install -r requirements.txt
python app.py
```

## Conclusion

That concludes how to run the project locally. Thanks for reading!