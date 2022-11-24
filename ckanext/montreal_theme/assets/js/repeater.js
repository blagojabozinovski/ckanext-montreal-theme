$(document).ready(function () {
    $("input[name='add']").click(function () {
        var $last = $('div[id^="search-data"]:last');
        var num = parseInt($last.prop("id").match(/\d+/g), 10 ) +1;

        var $cloned = $last.clone().prop('id', 'search-data'+num );
        $cloned.find('input').each(function() {
            if (this.type == 'text') {
                this.value = '';
                let name_num = this.name.match(/\d+/);
                name_num++;
                this.name = this.name.replace(/\[[0-9]\]+/, '['+name_num+']')
            }
            if (this.type == 'button') {
                let button_num =  this.id.match(/\d+/g);
                button_num++;
                console.log(button_num);
                console.log(this.id);
                this.id = this.id.replace(/\[[0-9]\]+/, '+button_num+')
            }


        });
        $last.after( $cloned );
    });

    $(document).on('click', 'input[name="remove"]', function(e) {
        $curr = $(this).closest('div[id^="remove"]');
        var $last = $curr.find('div[id^="search-data"]');
        console.log($curr);
        $last.remove();
        $curr.remove();
    });
});
