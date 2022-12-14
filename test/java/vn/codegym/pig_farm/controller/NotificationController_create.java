package vn.codegym.pig_farm.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import vn.codegym.pig_farm.dto.NotificationDto;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class NotificationController_create {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    /**
     * this function use to test the validation of field content more specific is null
     *
     * @author HuyenTN
     * @Time 09/09/2022
     */
    @Test
    public void create_content_13() throws Exception {
        NotificationDto notificationDto = new NotificationDto();
        notificationDto.setContent(null);
        notificationDto.setImage("https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg");

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .post("/notifications/create")
                        .content(this.objectMapper.writeValueAsString(notificationDto))
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andDo(print())
                .andExpect(status().is4xxClientError());
    }

    /**
     * this function use to test the validation of field image more specific is null
     *
     * @author HuyenTN
     * @Time 09/09/2022
     */
    @Test
    public void create_image_13() throws Exception {
        NotificationDto notificationDto = new NotificationDto();
        notificationDto.setContent("Hello");
        notificationDto.setImage(null);

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .post("/notifications/create")
                        .content(this.objectMapper.writeValueAsString(notificationDto))
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andDo(print())
                .andExpect(status().is4xxClientError());
    }

    /**
     * this function use to test the validation of field content more specific is empty
     *
     * @author HuyenTN
     * @Time 09/09/2022
     */
    @Test
    public void create_content_14() throws Exception {
        NotificationDto notificationDto = new NotificationDto();
        notificationDto.setContent("");
        notificationDto.setImage("https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg");

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .post("/notifications/create")
                        .content(this.objectMapper.writeValueAsString(notificationDto))
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andDo(print())
                .andExpect(status().is4xxClientError());
    }

    /**
     * this function use to test the validation of field image more specific is empty
     *
     * @author HuyenTN
     * @Time 09/09/2022
     */
    @Test
    public void create_image_14() throws Exception {
        NotificationDto notificationDto = new NotificationDto();
        notificationDto.setContent("Ngay 10/9 to??n th??? nh??n vi??n ???????c t??ng l????ng 10%");
        notificationDto.setImage("");

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .post("/notifications/create")
                        .content(this.objectMapper.writeValueAsString(notificationDto))
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andDo(print())
                .andExpect(status().is4xxClientError());
    }

    /**
     * this function use to test the validation of field content more specific is max length
     *
     * @author HuyenTN
     * @Time 09/09/2022
     */
    @Test
    public void create_content_15() throws Exception {
        NotificationDto notificationDto = new NotificationDto();
        notificationDto.setContent("Ng??y Qu???c t??? Ph??? n??? m??ng 8 th??ng 3 ra ?????i t??? phong tr??o ?????u tranh c???a c??ng nh??n n??? ??? M??? nh???m ????i quy???n s???ng.  V??o kho???ng cu???i th??? k??? 19 l?? th???i k?? ch??? ngh??a t?? b???n th???nh v?????ng ?????c bi???t l?? ??? M???.  C??ng nghi???p k??? ngh??? th???i ???? ph??t tri???n, ng?????i ta tuy???n d???ng r???t nhi???u ph??? n??? v?? tr??? em. Tuy nhi??n, th???i bu???i b???y gi??? quy???n l???i c???a ph??? n??? b??? xem nh???, t?? b???n ???? ch??n ??p, b??c l???t s???c lao ?????ng c???a ph??? n??? v?? tr??? em ?????n c??ng c???c nh??ng tr??? l????ng l???i r???t r??? m???t. Cu???c s???ng c???a ph??? n???, tr??? em ng??y c??ng ngh??o t??ng, kh???c nghi???t.\n" +
                "\n" +
                "Ph???n ?????i s??? b??c l???t t??n nh???n ????, v??o ng??y 8/3/1899 th??nh ph??? Chicago l???n New York ???? b??ng n??? cu???c ?????u tranh c???a n??? c??ng nh??n ng??nh d???t may v???i m???c ????ch ????i t??ng l????ng, gi???m gi??? l??m. Tuy nhi??n, cu???c ?????u tranh n??y nhanh ch??ng b??? ????n ??p th???ng tay, c??c n??? c??ng nh??n b??? ??u???i kh???i nh?? m??y. Song ??i???u ???? kh??ng l??m nh???t ch?? tinh th???n ?????u tranh c???a ch??? em ph??? n???, h??? v???n s??i s???c ?? ch?? v??ng d???y bu???c t?? b???n ph???i nh?????ng b???. Ng??y m??ng 8 th??ng 3 l?? ng??y Qu???c t??? Ph??? n???. Trong ng??y n??y, ng?????i ta th?????ng d??nh ????? vinh danh, th??? hi???n s??? t??n tr???ng v???i nh???ng ng?????i ph??? n??? tr??n th??? gi???i. ????y c??ng l?? d???p ????? m???i ng?????i b??y t??? t??nh c???m, s??? quan t??m ?????n c??c ch??? em, c??c b??, c??c m???, nh???ng ng?????i ph??? n??? tuy???t v???i xung quanh m??nh.");
        notificationDto.setImage("https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg");

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .post("/notifications/create")
                        .content(this.objectMapper.writeValueAsString(notificationDto))
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andDo(print())
                .andExpect(status().is4xxClientError());
    }

    /**
     * this function use to test the validation of successful
     *
     * @author HuyenTN
     * @Time 09/09/2022
     */
    @Test
    public void create_content_18() throws Exception {
        NotificationDto notificationDto = new NotificationDto();
        notificationDto.setContent("Ng??y mai to??n th??? nh??n vi??n ???????c ngh???");
        notificationDto.setImage("https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645-t.jpg");

        this.mockMvc
                .perform(MockMvcRequestBuilders
                        .post("/notifications/create")
                        .content(this.objectMapper.writeValueAsString(notificationDto))
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andDo(print())
                .andExpect(status().is2xxSuccessful());
    }
}
