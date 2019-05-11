var data = {
    slcArea: {
        'Queja': [
            'Demora de respuesta',
            'Trato inadecuado',
            'No conforme con respuesta',
            'Otro'
        ],
        'Reclamo': [
            'Seguridad ciudadana',
            'Pistas y veredas',
            'Parques y jardines',
            'Ruidos molestos',
            'Residuos sólidos y contaminación',
            'Agua y saneamiento',
            'Otros'
        ],
    }
}

$('select[name="slcArea"]').on('change', function() {
    var value = $(this).val()

    if (value) {
        $.each(data.slcArea[value], function(index, value) {
            if (index === 0) {
                $('select[name="slcMotivo"]').html('<option value="' + value + '">' + value + '</option>')
            } else {
                $('select[name="slcMotivo"]').append('<option value="' + value + '">' + value + '</option>')
            }
        })
    }
})