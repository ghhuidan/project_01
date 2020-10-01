$(function() {
    function getCmt() {
        $.get('http://www.liulongbin.top:3006/api/cmtlist', function(res) {
            if (res.status !== 200) {
                return alert('评论获取失败')
            }
            var rows = []
            $.each(res.data, function(i, item) {
                var str = '<li class="list-group-item"><span class="badge" style="background-color: seagreen;">评论时间:' + item.time + '</span> <span class="badge" style="background-color: sandybrown;">评论人:' + item.username + '</span>' + item.content + '</li>'
                rows.push(str);
            })
            $('.list-group').empty().append(rows.join(''));
        })
    }
    getCmt()

    $('.addCmt').submit(function(e) {
        e.preventDefault();
        var data = $(this).serialize();
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function(res) {
            if (res.status !== 201) {
                alert('发表评论失败')
            }
            getCmt();
            $('.addCmt')[0].reset()
        })
    })
})