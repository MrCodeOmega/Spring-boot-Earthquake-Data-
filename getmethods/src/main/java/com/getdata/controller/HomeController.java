package com.getdata.controller;

import com.getdata.models.DataModel;
import com.getdata.service.ServiceLayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class HomeController {

    private final ServiceLayer serviceLayer;
    @Autowired
    public HomeController (ServiceLayer serviceLayer)
    {
        this.serviceLayer = serviceLayer;
    }
    @CrossOrigin
    @RequestMapping(path = "/{startDate}/{endDate}")
    public ResponseEntity<DataModel> getData(@PathVariable String startDate, @PathVariable String endDate)
    {
       return new ResponseEntity<DataModel>(serviceLayer.consumeApi(startDate,endDate), HttpStatus.OK);
    }




}
