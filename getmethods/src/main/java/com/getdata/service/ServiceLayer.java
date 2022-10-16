package com.getdata.service;

import com.getdata.models.DataModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ServiceLayer {

    private final RestTemplate restTemplate;

    @Autowired
    public ServiceLayer(RestTemplate restTemplate)
    {
        this.restTemplate = restTemplate;
    }

    public DataModel consumeApi(String startDate, String endDate)
    {
        return restTemplate.getForObject("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime="+startDate+"&endtime="+endDate, DataModel.class);
    }

}
