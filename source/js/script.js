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


function Datadinamic() {
    $(".download").hide();
    $(".info").hide();

    $('select.detalle').on('change', function() {
        var valueDetail = $('select.tema option:selected').attr('value');    
        
        if(jQuery('select option:selected').attr("value") == 'canales') {
            $(".download").hide();
            $(".info").show();

            $('select.tema').on('change', function() {
                var valueTheme = jQuery('select.tema option:selected').attr('value').replace(/ /g,"-");
                $(".tele").text("Teléfono:" + " " + valueTheme);
                $(".anex").text("Anexo:" + " " + valueTheme);
            });
        } 

        if(jQuery('select option:selected').attr("value") == 'requisitos') {
            $(".download").show();
            $(".info").hide();
    
            $('select.tema').on('change', function() {
                var valueTheme = jQuery('select.tema option:selected').attr('value').replace(/ /g,"-");
                $('a#Download').attr({target: '_blank', href  : valueTheme + '.pdf'});
                $('a#Download').text("PDF :" + valueTheme )
            });
        }
    });
}

Datadinamic();