import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'colegio.andes.chile',
  appName: 'colegio.andes.chile.app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    Deeplinks: {
      schemes: ["andesChile"],
      hostnames: [
        { hostname: "colegioandeschile.cl", path: "home" }
      ]
    }
  },
};

export default config;
