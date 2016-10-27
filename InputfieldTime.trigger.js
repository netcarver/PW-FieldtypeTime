function InputFieldTimePickerTrigger(id) {
    var parent = $(id).parent();
    var picker = parent.data('clockpicker');

    if (!picker) {
        parent.clockpicker();
        picker = parent.data('clockpicker');
    }

    picker.toggle();
}
