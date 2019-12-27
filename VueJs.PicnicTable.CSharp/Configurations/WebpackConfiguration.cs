namespace VueJs.PicnicTable.CSharp.Configurations
{
    internal class WebpackConfiguration
    {
        public ushort Port { get; set; } = 8080;
        public string Configuration { get; set; } = "./build/webpack.config.js";
        public string Command { get; set; } = "./node_modules/.bin/webpack-dev-server.cmd";
    }
}