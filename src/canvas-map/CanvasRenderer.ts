export class CanvasRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(
        width?: number,
        height?: number
    ) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width || 300;
        this.canvas.height = height || 300;
        this.ctx = this.canvas.getContext('2d');
    }
    loadImage(url: string, scale: number = 1): Promise<HTMLImageElement> {
        let img = new Image();
        img.crossOrigin = 'Anonymous';
        return new Promise( (resolve, reject) => {
            img.onload = () => {
                img.width = img.width * scale;
                img.height = img.height * scale;
                resolve(img);
            };
            img.src = url;
        });
    }
    async drawImage(url: string, scale = 1, dx = 0, dy = 0 ): Promise<string> {
        console.log('draw image')
        let base64 = await this.loadImage(url, scale)
            .then(image => {
                this.ctx.drawImage(image, dx, dy);
                return this.canvas.toDataURL();
            });
            console.log(base64);
        return base64;
    }
    drawProfile(url, scale = 0, dx = 0, dy = 0, ) {
        console.log('draw profile')
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(25, 25, 100, 0, Math.PI * 2, true);
        this.ctx.clip();
        let base64 = this.drawImage(url, scale, dx, dy).then( () => this.ctx.restore());
        return base64;
    }
    getBase64(): string { return this.canvas.toDataURL(); }
}
