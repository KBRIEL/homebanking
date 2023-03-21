package com.mindhub.homebanking.controllers;


import com.mindhub.homebanking.models.dtos.ClientDTO;
import com.mindhub.homebanking.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@RestController
@RequestMapping("/api")
public class ClientController {

    @Autowired
    private ClientService clService;


    @GetMapping("/clients")
    public List<ClientDTO> getClients() throws Exception {
        try{
         //   return clRepository.findAll().stream().map(cl -> new ClientDTO(cl)).collect(Collectors.toList());
            return clService.getClients();
        }catch (Exception e){
            throw new Exception("no se encontro cliente");
        }

    }

        @RequestMapping("/clients/{id}")
        public ClientDTO getClient(@PathVariable Long id) {
    //  return new ClientDTO(clRepository.findById(id).get()) ;
            return clService.getClient(id);
        }

    @RequestMapping("/clients/email/{email}")
    public ClientDTO getClientE(@PathVariable String email) {
     //  return new ClientDTO(clRepository.findByEmail(email));
        return clService.getClientE(email);

    }


  /*
    @RequestMapping("/clients/{email}")
    public ClientDTO getClientByEmail(@PathVariable String email) {
            System.out.println(new ClientDTO(clRepository.findByEmail(email)));
       // return new ClientDTO(clRepository.findByEmail(email)) ;
        return new ClientDTO(clRepository.findById(1l).get()) ;
    }
  @RequestMapping("/google")
    public ModelAndView getGoo() {
        ModelAndView mv= new ModelAndView();
        mv.setViewName("login.html");
        return mv;
    }*/

    @PostMapping("/clients")
    public ResponseEntity<Object> register(@RequestParam String firstName, @RequestParam String lastName,
                                           @RequestParam String email, @RequestParam String password) {

        return clService.register( firstName,lastName, email, password);

    }



    @RequestMapping("/clients/current")
    public ClientDTO getClientCurrent(Authentication authentication) {
      //  return new ClientDTO(clRepository.findByEmail(authentication.getName()));
        return clService.getClientCurrent(authentication);
    }
}
