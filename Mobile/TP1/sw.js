self.addEventListener("fetch", function(event) {
    console.log("Fetch request for:", event.request.url);
    event.respondWith(
    fetch(event.request)
    .catch(function() { return new Response("You are offline ! "); // reponse en cas d’erreur
    })
    );
    });