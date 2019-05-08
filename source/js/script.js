var data = {
    tema: {
        'Agua': [
            '--',
            'Agua-1',
            'Agua-2',
        ],
        'Luz': [
            '--',
            'Luz-1',
            'Luz-2'
        ],
        'Desagüe':[
            '--',
            'Desagüe-1',
            'Desagüe-2'
        ]
    }
}

$('select[name="tema"]').on('change', function() {
    var value = $(this).val()

    if (value) {
        $.each(data.tema[value], function(index, value) {
            if (index === 0) {
                $('select[name="subtema"]').html('<option value="' + value + '">' + value + '</option>')
            } else {
                $('select[name="subtema"]').append('<option value="' + value + '">' + value + '</option>')
            }
        })
    }
})