var MyLayer = cc.Layer.extend({
    helloLabel:null,
    sprite:null,

    init:function () {
        this._super();
        var size = cc.director.getWinSize();

        this.helloLabel = new cc.LabelTTF("Hello World", "Impact", 38);
        this.helloLabel.setPosition(size.width / 2, size.height / 2);
        this.addChild(this.helloLabel, 5);
        this.helloLabel.runAction(
          new cc.rotateBy(2, 360).repeatForever()
        );

        this.sprite = new cc.Sprite(IMAGES.HelloWorld);
        this.sprite.setAnchorPoint(0.5, 0.5);
        this.sprite.setPosition(size.width / 2, size.height / 2);
        this.sprite.setScale(size.height / this.sprite.getContentSize().height);
        this.addChild(this.sprite, 0);
        this.sprite.runAction(
          new cc.rotateBy(9, 360).repeatForever()
        );
    }
});

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MyLayer();
        this.addChild(layer);
        layer.init();
    }
});
