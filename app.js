        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCNcfrz_776xjtvlL50csO6aEOV62u1AE0",
            authDomain: "web-4-0.firebaseapp.com",
            projectId: "web-4-0",
            storageBucket: "web-4-0.appspot.com",
            messagingSenderId: "1080702978770",
            appId: "1:1080702978770:web:953fdcc014b6d043adbb0b"
          };

           // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        const form = document.forms['formLogin'];

        form.addEventListener('submit', handleForSubmit);
        
        function handleForSubmit(event){
            event.preventDefault();

            const email = form['correo'].value;
            const password = form['contrasena'].value;

            console.log('Correo: ${email}, contraseña: ${password}');
        }