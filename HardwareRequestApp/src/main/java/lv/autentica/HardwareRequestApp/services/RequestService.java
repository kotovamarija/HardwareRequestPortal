package lv.autentica.HardwareRequestApp.services;

import lv.autentica.HardwareRequestApp.models.Request;
import lv.autentica.HardwareRequestApp.repositories.RequestRepository;
import lv.autentica.HardwareRequestApp.util.RequestNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class RequestService {
    @Autowired
    private RequestRepository requestRepository;

    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public Request getRequestById(Long id) {
        return requestRepository.findById(id).orElse(null);
    }

    @Transactional
    public Request save(Request request) {
        return requestRepository.save(request);
    }

    public String trackByTrackingNumber(String trackingNumber) {
        Optional<Request> request = requestRepository.findByTrackingNumber(trackingNumber);
        if (request.isPresent()) {
            return request.get().getStatus().toString();
        }
            throw new RequestNotFoundException();
        }



}
