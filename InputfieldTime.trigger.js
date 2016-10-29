function InputFieldTimePickerTrigger(id) {
    var element = $(id);
    var picker = element.data('clockpicker');

    if (!picker) {
        element.clockpicker();
        picker = element.data('clockpicker');
    }

    if (picker) {
        picker.show();
    }
}

$(document).on('closed', '.InputfieldRepeaterItem', function(e) {
    $('div.clockpicker').each(function(e){
        var picker = $(this).data('clockpicker');
        if (picker) {
            picker.hide();
        }
    });
});

$(document).on('opened', '.InputfieldRepeaterItem', function(e) {
    $('div.clockpicker').each(function(e){
        var picker = $(this).data('clockpicker');
        if (picker) {
            picker.hide();
        }
    });
});
