package com.pawn_shop.service.impl;

import com.pawn_shop.config.MailConfig;
import com.pawn_shop.model.login.AppUser;
import com.pawn_shop.service.ISendMailService;
import org.springframework.stereotype.Service;
import javax.mail.internet.*;
import java.util.Properties;
import com.pawn_shop.dto.projection.MailAutoProjection;
import com.pawn_shop.repository.IContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class SendMailService implements ISendMailService {
    @Autowired
    private IContractRepository contractRepository;

    @Override
    public void sendResetPasswordMail(AppUser user, String email, String jwt) throws Exception {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.host", MailConfig.HOST_NAME);
        props.put("mail.smtp.socketFactory.port", MailConfig.SSL_PORT);
        props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.put("mail.smtp.port", MailConfig.SSL_PORT);

        Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(MailConfig.APP_EMAIL, MailConfig.APP_PASSWORD);
            }
        });

        Multipart multipart = new MimeMultipart();
        MimeMessage message = new MimeMessage(session);
        message.setFrom(new InternetAddress(MailConfig.APP_EMAIL));
        message.addRecipient(Message.RecipientType.TO, new InternetAddress(email));
        message.setSubject("[C04-PawnShop] - Quên mật khẩu");
        String htmlContent = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Quên mật khẩu</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "<h3>Chào " + user.getEmployee().getName() + "</h3>\n" +
                "<p>Đây là email đặt lại mật khẩu của bạn, bấm vào link bên dưới để đặt lại mật khẩu:</p>\n" +
                "<a href=\"http://localhost:4200/reset-password/" + jwt + "\">Reset password link</a>\n" +
                "<p style=\"color: red\"><i>Lưu ý: Không chia sẻ link này cho người khác</i></p>\n" +
                "<hr>\n" +
                "<h4>C04 - PawnShop</h4>\n" +
                "<p>SĐT: 0123456789</p>\n" +
                "<p>Email: pawnshopc04@gmail.com</p>\n" +
                "</body>\n" +
                "</html>\n";
        MimeBodyPart textBodyPart = new MimeBodyPart();
        textBodyPart.setContent(htmlContent, "text/html; charset=UTF-8");
        multipart.addBodyPart(textBodyPart);
        message.setContent(multipart, "UTF-8");
        Transport.send(message);
    }

    @Override
    public List<MailAutoProjection> listEmail() {
        LocalDate beforeOneDay = LocalDate.now().plusDays(1);
        LocalDate beforeThreeDay = LocalDate.now().plusDays(3);
        LocalDate beforeSevenDay = LocalDate.now().plusDays(7);
        LocalDate afterOneDay = LocalDate.now().minusDays(1);
        return contractRepository.listEmailAutoSend(beforeOneDay, beforeThreeDay, beforeSevenDay, afterOneDay);
    }

    @Override
    public void sendMailAuto(Session session) {
        List<MailAutoProjection> mailAutoProjectionList = listEmail();

        if (!mailAutoProjectionList.isEmpty()) {
            for (MailAutoProjection emailTo : mailAutoProjectionList) {
                try {
                    Multipart multipart = new MimeMultipart();
                    MimeMessage message = new MimeMessage(session);

                    message.setFrom(new InternetAddress(MailConfig.APP_EMAIL));
                    message.addRecipient(Message.RecipientType.TO, new InternetAddress(emailTo.getCustomerEmail()));
                    message.setSubject("Thông Báo sắp hết hạn hợp đồng cầm đồ!");
                    String htmlContent = "<!DOCTYPE html>"
                            + "<html lang=\"vi\">"
                            + "<head>"
                            + "<meta charset=\"UTF-8\">"
                            + "</head>"
                            + "<body>"
                            + "<h1>Welcome to <a href=\"https://codegym.vn/khoa-hoc-tester-cho-nguoi-moi-bat-dau/?gclid=CjwKCAjwv4SaBhBPEiwA9YzZvPRMxPWq2piUwexVm23QyTLl1Ag6qz6YaCIuNTSFIMT3k1iW_324HBoCaVkQAvD_BwE\">CodeGym</a></h1>"
                            + "<h2 style=\"color: blue; fontSize:20px\">Dear " + emailTo.getCusTomerName() + "!</h2>"
                            + "<p>Bạn có 1 sản phẩm tại tiệm cầm đồ chúng tôi sẽ hết hạn vào ngày" + emailTo.getEndDate().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")) + "</p>"
                            + "<p>Vui lòng đến cửa hàng Pawn Shop C04 để thanh toán và lấy lại đồ</p>"
                            + "<h3> Thông tin chi tiết</h3>"
                            + "<table border=\"1\">"
                            + "<tr style=\"background-color: green; color: white\">"
                            + "<th>mã hợp đồng</th><th> tên sản phẩm </th><th>ngày bắt đầu </th><th>ngày kết thúc </th>"
                            + "<tr>"
                            + "<tr>"
                            + "<td>" + emailTo.getCode() + "</td>"
                            + "<td>" + emailTo.getPawnItemName() + "</td>"
                            + "<td>" + emailTo.getStartDate().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")) + "</td>"
                            + "<td>" + emailTo.getEndDate().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")) + "</td>"
                            + "</tr>"
                            + "</table>"
                            + "<img src=\"https://codegym.vn/wp-content/uploads/2017/03/CodeGym-3-02-copy.jpg\" " + " width=\"300\" " + " height=\"180\" " + " border=\"0\" " + " alt=\"pawnShopC04.vn\" />"
                            + "<h3 style=\"color:green\">Mr.Le Hong Son</h3>"
                            + "<b>Phone number:</b><span>0971450138</span>"
                            + "</body>"
                            + "</html>";
                    MimeBodyPart textBodyPart = new MimeBodyPart();
                    textBodyPart.setContent(htmlContent, "text/html; charset=UTF-8");
                    multipart.addBodyPart(textBodyPart);
                    message.setContent(multipart, "UTF-8");
                    Transport.send(message);
                } catch (MessagingException e) {
                    e.printStackTrace();
                }
            }
        } else {
            System.out.println("không có email nào để gửi!");
        }
    }

    @Override
    public void sendMailReturnItem(Session session, String email, String customerName) {
        try {
            Multipart multipart = new MimeMultipart();
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(MailConfig.APP_EMAIL));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(email));
            message.setSubject("XÁC NHẬN THANH TOÁN THÀNH CÔNG!");
            String htmlContent = "<!DOCTYPE html>"
                    + "<html lang=\"vi\">"
                    + "<head>"
                    + "<meta charset=\"UTF-8\">"
                    + "</head>"
                    + "<body>"
                    + "<h2 style=\"color: blue; fontSize:20px\">Dear " + customerName + "!</h2>"
                    + "<p>Hệ thống PAWN xác nhận bạn đã thanh toán thành công. Cảm ơn quý khách đã sử dụng dịch vụ của PAWN</p>"
                    + "<h3 style=\"color:green\">Mr. Trần Hoàng Long</h3>"
                    + "<b>Phone number:</b><span>0971450138</span>"
                    + "</body>"
                    + "</html>";
            MimeBodyPart textBodyPart = new MimeBodyPart();
            textBodyPart.setContent(htmlContent, "text/html; charset=UTF-8");
            multipart.addBodyPart(textBodyPart);
            message.setContent(multipart, "UTF-8");
            Transport.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
