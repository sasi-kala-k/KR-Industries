const logoBase64="data:image/png;base64,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"
export const contactEmailTemplate = ({  name, mobile, email, notes}) => {
  return `
  <!DOCTYPE html>
  <html>
  <body style="margin:0; padding:0; background-color:#f5f5f5; font-family: Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5; padding: 40px 0;">
      <tr>
        <td align="center">

          <!-- Logo -->
          <table width="480" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding-bottom: 24px;">
               <img src="data:image/png;base64,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" alt="" width="40" height="36" />
                <span style="font-size: 18px; font-weight: bold; color: #333; vertical-align:middle; margin-left: 8px;">KR Industries</span>
              </td>
            </tr>
          </table>

          <!-- Card -->
          <table width="480" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            <tr>
              <td style="padding: 40px;">

                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-bottom: 20px; font-size: 14px; color: #333;">
                      <strong style="display:inline-block; width:120px;">Name</strong> : &nbsp;<span style="color:#666;">${name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 20px; font-size: 14px; color: #333;">
                      <strong style="display:inline-block; width:120px;">Mobile Number</strong> : &nbsp;<span style="color:#666;">${mobile || 'N/A'}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 20px; font-size: 14px; color: #333;">
                      <strong style="display:inline-block; width:120px;">Email</strong> : &nbsp;<span style="color:#666;">${email}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 30px; font-size: 14px; color: #333; vertical-align: top;">
                      <strong style="display:inline-block; width:120px; vertical-align: top;">Notes</strong> : &nbsp;<span style="color:#666;">${notes}</span>
                    </td>
                  </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center">
                      <a href="#" style="display:inline-block; background-color:#946603; color:#ffffff; text-decoration:none; padding: 12px 28px; border-radius: 6px; font-size: 14px; font-weight: 600;">Let's Start</a>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>

          <!-- Social Icons -->
          <table cellpadding="0" cellspacing="0" style="margin-top: 30px;">
            <tr>
              <td style="padding: 0 6px;">
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/32/2111/2111463.png" width="32" height="32" alt="Instagram" style="border-radius:50%;" /></a>
              </td>
              <td style="padding: 0 6px;">
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/32/733/733547.png" width="32" height="32" alt="Facebook" style="border-radius:50%;" /></a>
              </td>
              <td style="padding: 0 6px;">
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/32/5968/5968958.png" width="32" height="32" alt="Twitter" style="border-radius:50%;" /></a>
              </td>
              <td style="padding: 0 6px;">
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/32/174/174857.png" width="32" height="32" alt="LinkedIn" style="border-radius:50%;" /></a>
              </td>
            </tr>
          </table>

          <!-- Footer -->
          <table width="480" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding-top: 20px; padding-bottom: 12px; font-size: 13px; color: #999;">
                Ready to shine? Let's begin your success story!
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size: 12px; color: #999;">
                <a href="#" style="color:#999; text-decoration: underline;">Help Center</a> ·
                <a href="#" style="color:#999; text-decoration: underline;">Privacy Policy</a> ·
                <a href="#" style="color:#999; text-decoration: underline;">Terms of service</a>
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>
  </body>
  </html>
  `
}

