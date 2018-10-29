module.exports = function(str) {
  if (!str) {
    throw new Error('An argument is required');
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str.split(' '));
    }, 1000);
  });
};
  
  