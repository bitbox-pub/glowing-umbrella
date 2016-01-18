System.import('github:bitbox-pub/bitbox')
    .then(m => {
        window.bit = m.bit
        window.box = m.box
        window.pub = m.pub
        bootstrap()
    })

function bootstrap() {

    var edit = box(function() {
        return box('input', {
            on: { input: e => pub(this, 'name', e.target.value) },
            attrs: { value: this.name }
        })
    })

    var hello = box(function(props) {
        return box('hello', [
            box('h1', 'Hello ' + this.name),
            edit.call(this)
        ])
    }, {
        name: 'World'
    })

    app = new bit(hello, document.body)

    pub(app, 'name', 'sereban')

}
