1. Download MongoDB Community Server
   - Go to https://www.mongodb.com/try/download/community

2. Installation at Windows
   - This example is use version 4.4.21
   - Run Windows Installer mongodb-windows-x86_64-4.4.21-signed
   - Setup Environment Variables, copy this path C:\Program Files\MongoDB\Server\4.4\bin

3. Run MonggoDB at terminal
   - Open terminal, then use commmand: mongo
   - Done & congratulation you finished the installation!

4. How to Use Methods At Terminal
   - Go to https://www.mongodb.com/docs/mongodb-shell/reference/methods/ for complete references

   Try to use this commands:
   show dbs
   Note: To display the list of all databases in a MongoDB server.

   use wpu
   Note: The use command in MongoDB is used to switch to a specific database. If the database does not exist (wpu is not exist), it will be    created automatically when you first write data to it.

   db.createCollection('mahasiswa')
   Note: The db.createCollection() method in MongoDB is used to create a new collection in the current database.

   show collections
   Note: In MongoDB, the show collections command is used to display a list of all collections in the current database. To use this command, you first need to switch to the database you want to see the collections for using the use command.

   db.mahasiswa.insert({ nama: "Valdryan Ivandito", email: "valdryan05@gmail.com" })
   Note: The db.mahasiswa.insert() method in MongoDB is used to insert a new document into a collection. To insert a new document into the "mahasiswa" collection with the fields "nama" and "email" set to "Valdryan Ivandito" and "valdryan05@gmail.com"

   db.mahasiswa.insertMany([
      { nama: "Cindy Maple", email: "cindy@gmail.com"},
      { nama: "Gideon Vaan", email: "gideon@gmail.com"}
   ])
   Note: The db.mahasiswa.insertMany() method in MongoDB is used to insert multiple documents into a collection at once. To insert multiple documents into the "mahasiswa" collection with the specified fields.

   db.mahasiswa.find()
   Note: The db.mahasiswa.find() method in MongoDB is used to retrieve documents from the "mahasiswa" collection. When called without any arguments, find() returns all documents in the collection.

   cls
   Note: To clear the terminal screen.

4. How to Use Atlas (Cloud)
   - Go to https://www.mongodb.com/atlas
   - Sign in with your google account or github or email
   - Deploy database: select m0 for free tier, select provider (AWS, GoogleCloud, or Azure), select region, and create
   - Create username & password
   - goto cluster and then click connect
   - select "I have mongo shell installed"
   - Select your mongo shell version (example v4.4)
   - select (compass, or shell, or VScode, or Atlas SQL), for example select shell
   - Run your connection string in your command line, Use this connection string in your application: (example: mongo "mongodb+srv://cluster0.rxwsbnm.mongodb.net/myFirstDatabase" --username admin)
   - Goto terminal (previously close the local mongodb) copy-paste the connection string
   - if there are some error like this: *** You have failed to connect to a MongoDB Atlas cluster. Please ensure that your IP whitelist allows connections from your network. Go to network access, edit ip address, select allow access from anywere or add current ip address.