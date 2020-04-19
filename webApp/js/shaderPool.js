var shaderPool = [
	{
		name: "Clean Cube",
		controlsInitial: [0, 0, 0],
		code: [
			"// CLEAN, STARTING CUBE OF VERTICES",
			"",
			"const float PI = 3.14159265358;",
			"const float TWO_PI = 6.28318530718;",
			"const float HALF_PI = 1.57079632679;",
			"",
			"uniform vec3 controls; // RGB sliders",
			"uniform float time; // IN SECONDS",
			"varying vec4 vertexColor;",
			"attribute float vertexSize;",
			"",
			"void main(){",
			"",
			"	vec4 finalPosition = vec4(position, 1.0);",
			"	gl_Position = projectionMatrix * modelViewMatrix * finalPosition;",
			"	vertexColor = vec4(color,1.0);",
			"	gl_PointSize = vertexSize;",
			"}"
		]
	},
	{
		name: "Pulsing Bird-Cage",
		controlsInitial: [0.64, -0.46, 0.48],
		code: [
			"const float PI = 3.14159265358;",
			"const float TWO_PI = 6.28318530718;",
			"const float HALF_PI = 1.57079632679;",
			"",
			"uniform vec3 controls; // RGB sliders",
			"uniform float time; // IN SECONDS",
			"varying vec4 vertexColor;",
			"attribute float vertexSize;",
			"",
			"float arcFunction(float yPos){",
			"		return abs(sin((yPos * PI)+ time * controls.r) + 0.3",
			"  	* cos(time * controls.r * yPos));",
			"}",
			"",
			"void main(){",
			"",
			"  vec3 vCentered = position * 2. - 1.;",
			"	vCentered.y = (vCentered.y + 1.) * 0.5; // SET HEIGHT TO 0 -> 1 BACK AGAIN",
			"",
			"	// ANGLE FOR VERTEX ALPHA",
			"	float angle = atan(vCentered.z / vCentered.x);",
			"	angle = fract(angle * (8.)); // controls.r",
			"  angle = step(0.8,angle);",
			"	",
			"  // ARC",
			"  	",
			"	float arc = arcFunction(vCentered.y) * controls.b; // controls.b = cage size",
			"  	",
			"	float lineWeight = 0.3;",
			"	float arcIn = 1. - step(arc + lineWeight, length(vCentered.xz) * (1.0 - controls.g)); // DISTANCE TO ARC FILL INSIDE",
			"	float arcOut = step(arc, length(vCentered.xz));  // DISTANCE TO ARC FILL INSIDE",
			"",
			"	angle *= arcIn * arcOut; // INTERSECTION",
			"",
			"	vec4 finalPosition = vec4(vCentered * 1.5, 1.0);",
			"	gl_Position = projectionMatrix * modelViewMatrix * finalPosition;",
			"	vertexColor = vec4(position,angle);",
			"	gl_PointSize = vertexSize * 1.5;",
			"}",
		]
	},
]




