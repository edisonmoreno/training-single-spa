# training-single-spa

Creación de micro frontends utilizando un marco de Single-SPA

# Introducción
Creación de una aplicación en **React**, una será la contenedora de otros 3 módulos (micro frontend):

1. Creación de una aplicación contenedora (single-spa-demo-root-config)
2. Creación de módulo (micro fronend) para el encabezado (single-spa-demo-header)
3. Creación de otro módulo para la página de inicio (single-spa-demo-home)
4. Creación de un último módulo para la página de prueba (single-spa-demo-test-page)

# Ejecución

cd .\single-spa-demo-root-config\
npm start -- --port 9000

cd .\single-spa-demo-header\
npm start -- --port 9001

cd .\single-spa-demo-home\  
npm start -- --port 9002

cd .\single-spa-demo-test-page\
npm start -- --port 9003

# Probar
Ingrese a: http://localhost:9000/


![image](https://user-images.githubusercontent.com/2068328/137815786-8f46b860-c87f-417c-9eef-785ee97c3978.png)
