<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<title>Potree Viewer</title>

	<link rel="stylesheet" type="text/css" href="potree-1.6/build/potree/potree.css">
	<link rel="stylesheet" type="text/css" href="potree-1.6/libs/jquery-ui/jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" href="potree-1.6/libs/perfect-scrollbar/css/perfect-scrollbar.css">
	<link rel="stylesheet" type="text/css" href="potree-1.6/libs/openlayers3/ol.css">
	<link rel="stylesheet" type="text/css" href="potree-1.6/libs/spectrum/spectrum.css">
	<link rel="stylesheet" type="text/css" href="potree-1.6/libs/jstree/themes/mixed/style.css">
</head>

<body>
	<script src="potree-1.6/libs/jquery/jquery-3.1.1.min.js"></script>
	<script src="potree-1.6/libs/spectrum/spectrum.js"></script>
	<script src="potree-1.6/libs/perfect-scrollbar/js/perfect-scrollbar.jquery.js"></script>
	<script src="potree-1.6/libs/jquery-ui/jquery-ui.min.js"></script>
	<script src="potree-1.6/libs/three.js/build/three.min.js"></script>
	<script src="potree-1.6/libs/other/BinaryHeap.js"></script>
	<script src="potree-1.6/libs/tween/tween.min.js"></script>
	<script src="potree-1.6/libs/d3/d3.js"></script>
	<script src="potree-1.6/libs/proj4/proj4.js"></script>
	<script src="potree-1.6/libs/openlayers3/ol.js"></script>
	<script src="potree-1.6/libs/i18next/i18next.js"></script>
	<script src="potree-1.6/libs/jstree/jstree.js"></script>
	<script src="potree-1.6/build/potree/potree.js"></script>
	<script src="potree-1.6/libs/plasio/js/laslaz.js"></script>
	
	<!-- INCLUDE ADDITIONAL DEPENDENCIES HERE -->
	<!-- INCLUDE SETTINGS HERE -->
	
	<div class="potree_container" style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; ">
		<div id="potree_render_area"></div>
		<div id="potree_sidebar_container"> </div>
	</div>
	
	<script>
	
		window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));
		
		viewer.setEDLEnabled(true);
		viewer.setFOV(60);
		viewer.setPointBudget(1*1000*1000);
		viewer.loadSettingsFromURL();
		
		viewer.setDescription("Point cloud courtesy of <a target='_blank' href='https://www.sigeom.ch/'>sigeom sa</a>");
		
		viewer.loadGUI(() => {
			viewer.setLanguage('en');
			$("#menu_tools").next().show();
			$("#menu_clipping").next().show();
			viewer.toggleSidebar();
		});
		
		// Load and add point cloud to scene
		Potree.loadPointCloud("data/cloud.js", "sigeom.sa", e => {
			let scene = viewer.scene;
			let pointcloud = e.pointcloud;
			
			let material = pointcloud.material;
			material.size = 1;
			material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
			material.shape = Potree.PointShape.SQUARE;
			
			scene.addPointCloud(pointcloud);
			
			//scene.view.position.set(589974.341, 231698.397, 986.146);
			//scene.view.lookAt(new THREE.Vector3(589851.587, 231428.213, 715.634));
			 viewer.fitToScreen();
		});
		
	</script>
	
	
  </body>
</html>
