// assigning our api key to a variable; easier to read and reuse.
var apiKey = "d4faf03d83d711fa3aa93aedf9160107";

// function so that our button is clickable and interactive.

document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons() {
    document.getElementById("submitZip").addEventListener("click", function(event) {
            event.preventDefault();

            // getting zip code from form entry by user.
            var zip = 
            document.getElementById("zip").value;

            var url = "http://api.petfinder.com/pet.getRandom";

            // filling out the query with ajax

            $.ajax({
                url: url,
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                    key: apiKey,

                    animal: "dog",
                    "location": zip,
                    output: "basic",
                    format: "json"

                },

                // hadling the response we get back from the call to Petfinder

                success: function(response) {
                    // debug with console log
                    console.log(response);

                    var dogName = response.petfinder.pet.name.$t;
                    var img = response.petfinder.pet.media.photos.photo[0].$t;
                    var id = response.petfinder.pet.id.$t;

                    var newName = document.createElement("a");

                    var newDiv = document.createElement("div");

                    newName.textContent = dogName;

                    newName.href = "https://www.petfinder.com/petdetail" + id;

                    var newImg = document.createElement("img"); 

                    newImg.src = img; 

                        // adding the results from the JSON to the webpage.
                    var list = document.createElement("div");
                     list.setAttribute("id", "List");
                     document.body.appendChild(list);

                     newDiv.appendChild(newName);
                     list.appendChild(newDiv);
                     list.appendChild(newImg);

                }

            });
    })
}