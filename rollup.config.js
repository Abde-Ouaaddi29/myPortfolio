// rollup.config.js
export default {
    // other Rollup configuration...
    external: ['react', 'react-dom', 'react-redux'], // Add react-redux here
    input: 'src/main.jsx',
    output: {
      file: 'dist/bundle.js',
      format: 'es',
    },
    plugins: [
      // Add your plugins here
    ],
  };
  