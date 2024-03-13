$(document).ready(function() {
    $("#disease-history").change(function() {
        var selectedValue = $(this).val();
        if (selectedValue === "Yes") {
            window.location.href = "detail2.html"; // Redirect to the new page
        }
    });
});