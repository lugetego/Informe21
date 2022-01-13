
var $sport = $("#posdoc_programas");

$(document).ready(function(){

    $sport.change(function(){

        var $form = $(this).closest('form');

        // Simulate form data, but only include the selected sport value.
        var data = {};
        data[$sport.attr("name")] = $sport.val();
        // Submit data via AJAX to the form's action path.

        $('#posdoc_programa').attr('readonly', true);

        if ($sport.val()=='Otro') {
            $.ajax({
                url: $form.attr('action'),
                type: $form.attr('method'),
                data: data,
                success: function (html) {

                    $("#posdoc_programa").replaceWith(
                        // ... with the returned one from the AJAX response.
                        $(html).find("#posdoc_programa")

                        //$("select:first").replaceWith("Hello world!"
                    );

                    $('#posdoc_programa').attr('readonly', false);

                    // Position field now displays the appropriate positions.
                }
            });
        }
    });
});