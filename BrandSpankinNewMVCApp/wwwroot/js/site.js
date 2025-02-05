// Write your JavaScript code.
$(document).ready(function () {

    $("#calculatorForm button").click(function () {

        var hours = $("#hoursNeeded").val();
        var hourlyRate = parseFloat($("#hourlyRate").text()); // Get hourly rate from hidden span

        // Validate input
        if (hours <= 0 || isNaN(hours)) {
            $("#error-message").show();
            return;
        } else {
            $("#error-message").hide();
        }

        // Calculate total
        var total = hours * hourlyRate;

        // Display result
        $("#totalCost").val(total.toFixed(2));
    });
});
