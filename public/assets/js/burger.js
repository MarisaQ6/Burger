$(function() {
    $(".change-yum").on("click", function(event) {
      var id = $(this).data("id");
      var newYum = $(this).data("newyum");
  
      var newYumFood = {
        yum: newYum
      };
  
         $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newYumFood
      }).then(
        function() {
          console.log("changed yum to", newYum);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurgers = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=yum]:checked").val().trim()
      };
  
      $.ajax("/api/cats", {
        type: "POST",
        data: newBurgers
      }).then(
        function() {
          console.log("made new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burgers").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("ate burger", id);
          location.reload();
        }
      );
    });
  });
  