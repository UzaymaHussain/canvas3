var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var width = screen.width;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    
    var width = screen.width;
    
    new_width = screen.width - 70;
    new_height = screen.height - 300;

    if(width <992)
    {
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = hidden;
    }


    
    canvas.addEventListener("mousedown", my_mousedown);  
    
    function my_touchstart(e)
    {
        console.log("my_touchstart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
    }

    //Replace the 'mousemove' event with 'touchmove'.
    canvas.addEventListener("mousemove", my_mousemove);
    //Replace the "my_mousemove()" function with "my_touchmove()" function.
    function my_touchmove()
    {
        //Log the "my_touchMove" in the console.
        console.log("my_touchMove");

        
        current_position_of_touch_x = 400
        current_position_of_touch_y = 200

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
    
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
    
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    //Additional activity to clear area.

    

