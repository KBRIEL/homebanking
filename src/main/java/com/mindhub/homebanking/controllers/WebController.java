package com.mindhub.homebanking.controllers;


import com.mindhub.homebanking.models.dtos.AccountDTO;
import com.mindhub.homebanking.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

import static java.util.stream.Collectors.toList;


@RestController
@RequestMapping("/web")
public class WebController {

    @RequestMapping("/acount.html")
    public ModelAndView getAcc() {
        ModelAndView mv= new ModelAndView();
        mv.setViewName("account.html");
        return mv;
    }

    /*

    @Autowired
    private AccountRepository accRepository;

    @RequestMapping("/accounts")
    public List<AccountDTO> getAll(){
        return accRepository.findAll().stream().map(a -> new AccountDTO(a)).collect(toList());
    }

    @RequestMapping("/accounts/{id}")
    public AccountDTO getAccount(@PathVariable Long id){
        return accRepository.findById(id).map(a-> new AccountDTO(a)).orElse(null);
    }
*/
}