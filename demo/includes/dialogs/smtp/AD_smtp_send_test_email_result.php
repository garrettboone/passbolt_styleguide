<div class="dialog-wrapper ready">
    <div class="dialog">
        <div class="dialog-header">
            <h2>Send test email</h2>
            <a href="demo/AD_admin_smtp_configuration.php" class="dialog-close">
            <span class="svg-icon">
                    <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/></svg>
                </span>
                <span class="visuallyhidden">close</span>
            </a>
        </div>
        <div class="dialog-content">
            <div class="form-content">
                <p class="inline-error">The email could not be sent.</p>
                <p>A connection could not be established with the SMTP server (Use the error returned by the server).</p>
                <div class="accordion error-trace closed">
                    <span class="accordion-header"><a href="#">See debug trace</a></span>
                    <div class="accordion-content">
                        <br />
                        <div class="input text">
                            <label for="js_field_debug" class="visuallyhidden">Report</label>
                            <textarea id="js_field_debug">index.min.js:4563 PassboltApiFetchError: Failed to fetch
    at Function.ResourceService.findAll (chrome-extension://plcnjfjccnfooibklhmgbbhhcglljclp/index.min.js:12694:11)
(anonymous) @ index.min.js:4563
async function (async)
(anonymous) @ index.min.js:4560
(anonymous) @ index.min.js:11898
						    </textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="submit-wrapper clearfix">
            <a class="button primary" href="demo/AD_admin_smtp_configuration.php">OK</a>
        </div>
    </div>
</div>
<script type="application/javascript">
    $('.dialog-content .error-trace a').click(() => {
        console.log('clic');
        console.log($('.dialog-content .error-trace .hidden').length);
        $('.dialog-content .error-trace .message').removeClass('hidden');
    });
</script>