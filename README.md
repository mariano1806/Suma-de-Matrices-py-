# Sumar Matrices

Este proyecto permite sumar dos matrices con las mismas dimensiones.

---

## **Versiones disponibles:**

2. **Python (Flask):** La suma de matrices se realiza en el servidor utilizando Flask.

---

## **Instrucciones para ejecutar la versión de Python (Flask)**

### 1. **Abre el proyecto en Visual Studio Code**
   - Abre Visual Studio Code.
   - Clona el repositorio con el siguiente comando en la terminal:
     ```sh
     git clone https://github.com/mariano1806/Suma-de-Matrices-py-.git
     ```
   - Abre la carpeta del repositorio en Visual Studio Code.

### 2. **(Opcional) Crear un entorno virtual**
   - Abre la terminal de Visual Studio Code (`View` → `Terminal` o presionando `Ctrl + ñ`).
   - Crea un entorno virtual (opcional pero recomendado):

     - **Windows (CMD o PowerShell)**:
       ```sh
       python -m venv venv
       venv\Scripts\activate
       ```

     - **Mac/Linux**:
       ```sh
       python3 -m venv venv
       source venv/bin/activate
       ```

   Esto crea y activa un entorno virtual en la carpeta `venv`.

### 3. **Instalar las dependencias**
   - Asegúrate de que el entorno virtual esté activado (si lo estás utilizando).
   - Ejecuta el siguiente comando en la terminal para instalar Flask y las demás dependencias:
     ```sh
     pip install -r requirements.txt
     ```

### 4. **Ejecutar la aplicación**
   - En la terminal, ejecuta el siguiente comando para iniciar el servidor Flask:
     ```sh
     python app.py
     ```
   - Abre tu navegador y accede a:
     ```
     http://127.0.0.1:5000
     ```
   Esto te permitirá ver la interfaz de usuario para sumar las matrices.

### 5. **Detener el servidor**
   - Para detener el servidor Flask, presiona `Ctrl + C` en la terminal donde se está ejecutando.
