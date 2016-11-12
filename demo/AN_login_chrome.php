<?php
/**
 * LOGIN: there is no passbolt plugin
 */
?>
<!doctype html>
<html class="passbolt no-js no-passboltplugin version alpha" lang="en">
<head>
	<title>Login</title>
	<?php include('includes/ALL_meta.php'); ?>
	<link rel="stylesheet" type="text/css" href="css/login.css" />
<body>
<div id="container" class="login page">
<?php include('includes/ALL_top_warning_messages.php'); ?>
<?php include('includes/AN_header_first.php'); ?>

	<!-- main -->
	<div class="grid">
		<div class="row js_main-login-section">
			<div class="col6 push1 information">
				<h2>Download the plugin to get started!</h2>
				<div class="plugin-check-wrapper">
					<div class="plugin-check chrome error">
						<p class="message">An add-on is required to use Passbolt. Download it at <a href="https://chrome.google.com/webstore">chrome.google.com</a>.</p>
					</div>
				</div>
				<p>
					Passbolt is a simple password manager that allows you to easily share secrets with your team without making compromises on security!
				</p>
			</div>
			<div class="col4 push1 last">
				<div class="logo">
					<h1><span class="visuallyhidden">Passbolt</span></h1>
				</div>
				<div class="users login form">
					<div class="feedback">
						<i class="fa fa-download huge" ></i>
					</div>
					<div class="actions-wrapper center">
						<a class="button primary big" href="../demo/AN_login_noconfig.php">Download the plugin</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<?php include('includes/AN_promoblock_github.php'); ?>
			<?php include('includes/AN_promoblock_firefoxplugin.php'); ?>
			<?php //include('includes/AN_promoblock_donate.php'); ?>
		</div>
	</div>
</div>
<?php include('includes/AN_footer.php'); ?>
</body>
</html>
