Посилання на лабораторну 

https://web-production-96d4.up.railway.app/

В лабі реалізовано декілька шляхів для маршрутизації

/example

/users

/xmlRoute

/shutdown

також сервер може обробляти запити  

пост- curl -X POST -H "Content-Type: application/json" -d '{"newValue":"New Value"}' https://web-production-96d4.up.railway.app/example

опшен - curl -X OPTIONS https://web-production-96d4.up.railway.app/example

закриття - curl -X POST https://web-production-96d4.up.railway.app/shutdown
