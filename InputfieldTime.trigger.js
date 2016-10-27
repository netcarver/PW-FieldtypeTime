function InputFieldTimePickerTrigger(id) {
    var parent = $(id).parent();
    var picker = parent.data('clockpicker');

    if (!picker) {
        parent.clockpicker();
        picker = parent.data('clockpicker');
    }

    picker.toggle();
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
