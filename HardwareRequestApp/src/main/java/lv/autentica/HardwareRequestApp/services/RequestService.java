package lv.autentica.HardwareRequestApp.services;

import lv.autentica.HardwareRequestApp.models.Request;
import lv.autentica.HardwareRequestApp.models.enums.Status;
import lv.autentica.HardwareRequestApp.repositories.RequestRepository;
import lv.autentica.HardwareRequestApp.util.RequestNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class RequestService {

    private RequestRepository requestRepository;

    @Autowired
    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    @Transactional
    public Request save(Request request) {
        return requestRepository.save(request);
    }

    @Transactional
    public void deleteByTrackingNumber(String trackingNumber) {
        requestRepository.deleteByTrackingNumber(trackingNumber);
    }

    public String getStatusByTrackingNumber(String trackingNumber) {
        Optional<Request> request = requestRepository.findByTrackingNumber(trackingNumber);
        if (request.isPresent()) {
            return request.get().getStatus().toString();
        }
            throw new RequestNotFoundException();
        }

    public Request getRequestByTrackingNumber(String trackingNumber) {
        Optional<Request> request = requestRepository.findByTrackingNumber(trackingNumber);
        if (request.isPresent()) {
            System.out.println("the status: " + request.get().getStatus().toString());
            return request.get();
        }
        throw new RequestNotFoundException();
    }

    @Transactional
    public void changeStatus(Request request, Status status) {
        request.setStatus(status);
    }




}
