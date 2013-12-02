rawimage.prototype.setScales = function(r, g, b) {
  this.gl.useProgram(this.programs.color);
  
  this.gl.uniform1f(this.uniforms.color.uScaleR, r);
  this.gl.uniform1f(this.uniforms.color.uScaleG, g);
  this.gl.uniform1f(this.uniforms.color.uScaleB, b);
  
  this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
};

rawimage.prototype.setCalibrations = function(r, g, b) {
  this.gl.useProgram(this.programs.color);
  
  this.gl.uniform1f(this.uniforms.color.uCalibrationR, r);
  this.gl.uniform1f(this.uniforms.color.uCalibrationG, g);
  this.gl.uniform1f(this.uniforms.color.uCalibrationB, b);
  
  this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
};

rawimage.prototype.setAlpha = function(alpha) {
  this.gl.useProgram(this.programs.color);
  this.gl.uniform1f(this.uniforms.color.uAlpha, alpha);
  this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
};
rawimage.prototype.setQ = function(Q) {
  this.gl.useProgram(this.programs.color);
  this.gl.uniform1f(this.uniforms.color.uQ, Q);
  this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
};

rawimage.prototype.drawColor = function(rId, gId, bId) {
  this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  this.program = 'color';
  this.gl.useProgram(this.programs.color);
  
  this.gl.uniform1i(this.uniforms.color.uTexture0, this.lookup[rId]);
  this.gl.uniform1i(this.uniforms.color.uTexture1, this.lookup[gId]);
  this.gl.uniform1i(this.uniforms.color.uTexture2, this.lookup[bId]);
  
  this.draw();
};